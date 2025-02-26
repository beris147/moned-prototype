drop policy "Enable update users their own messages" on "public"."message";

drop policy "Enable users to delete their own messages" on "public"."message";

drop policy "Enable users to view their own messages" on "public"."message";

drop policy "Enable patients to update their own info only" on "public"."patient";

drop policy "Enable read access for all users" on "public"."patient";

revoke delete on table "public"."message" from "anon";

revoke insert on table "public"."message" from "anon";

revoke references on table "public"."message" from "anon";

revoke select on table "public"."message" from "anon";

revoke trigger on table "public"."message" from "anon";

revoke truncate on table "public"."message" from "anon";

revoke update on table "public"."message" from "anon";

revoke delete on table "public"."message" from "authenticated";

revoke insert on table "public"."message" from "authenticated";

revoke references on table "public"."message" from "authenticated";

revoke select on table "public"."message" from "authenticated";

revoke trigger on table "public"."message" from "authenticated";

revoke truncate on table "public"."message" from "authenticated";

revoke update on table "public"."message" from "authenticated";

revoke delete on table "public"."message" from "service_role";

revoke insert on table "public"."message" from "service_role";

revoke references on table "public"."message" from "service_role";

revoke select on table "public"."message" from "service_role";

revoke trigger on table "public"."message" from "service_role";

revoke truncate on table "public"."message" from "service_role";

revoke update on table "public"."message" from "service_role";

revoke delete on table "public"."patient" from "anon";

revoke insert on table "public"."patient" from "anon";

revoke references on table "public"."patient" from "anon";

revoke select on table "public"."patient" from "anon";

revoke trigger on table "public"."patient" from "anon";

revoke truncate on table "public"."patient" from "anon";

revoke update on table "public"."patient" from "anon";

revoke delete on table "public"."patient" from "authenticated";

revoke insert on table "public"."patient" from "authenticated";

revoke references on table "public"."patient" from "authenticated";

revoke select on table "public"."patient" from "authenticated";

revoke trigger on table "public"."patient" from "authenticated";

revoke truncate on table "public"."patient" from "authenticated";

revoke update on table "public"."patient" from "authenticated";

revoke delete on table "public"."patient" from "service_role";

revoke insert on table "public"."patient" from "service_role";

revoke references on table "public"."patient" from "service_role";

revoke select on table "public"."patient" from "service_role";

revoke trigger on table "public"."patient" from "service_role";

revoke truncate on table "public"."patient" from "service_role";

revoke update on table "public"."patient" from "service_role";

alter table "public"."admin" drop constraint "admin_email_key";

alter table "public"."admin" drop constraint "admin_phone_number_key";

alter table "public"."patient" drop constraint "patient_email_key";

alter table "public"."patient" drop constraint "patient_id_fkey";

alter table "public"."provider" drop constraint "provider_email_key";

alter table "public"."appointment" drop constraint "appointment_patient_user_id_fkey";

alter table "public"."message" drop constraint "message_pkey";

alter table "public"."patient" drop constraint "patient_pkey";

drop index if exists "public"."admin_email_key";

drop index if exists "public"."admin_phone_number_key";

drop index if exists "public"."message_pkey";

drop index if exists "public"."provider_email_key";

drop index if exists "public"."patient_email_key";

drop index if exists "public"."patient_pkey";

drop table "public"."message";

drop table "public"."patient";

alter type "public"."week_day" rename to "week_day__old_version_to_be_dropped";

create type "public"."week_day" as enum ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

create table "public"."messages" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "from_user_id" uuid not null,
    "to_user_id" uuid not null,
    "content" text not null
);


alter table "public"."messages" enable row level security;

create table "public"."user" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "email" character varying not null,
    "full_name" text,
    "phone_number" text,
    "testing" boolean not null default false
);


alter table "public"."user" enable row level security;

alter table "public"."provider_availability" alter column day_of_week type "public"."week_day" using day_of_week::text::"public"."week_day";

drop type "public"."week_day__old_version_to_be_dropped";

alter table "public"."admin" drop column "email";

alter table "public"."admin" drop column "phone_number";

alter table "public"."provider" drop column "email";

alter table "public"."provider" drop column "full_name";

alter table "public"."provider" drop column "phone_number";

CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id, from_user_id, to_user_id);

CREATE UNIQUE INDEX patient_email_key ON public."user" USING btree (email);

CREATE UNIQUE INDEX patient_pkey ON public."user" USING btree (id);

alter table "public"."messages" add constraint "messages_pkey" PRIMARY KEY using index "messages_pkey";

alter table "public"."user" add constraint "patient_pkey" PRIMARY KEY using index "patient_pkey";

alter table "public"."admin" add constraint "admins_id_fkey" FOREIGN KEY (id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."admin" validate constraint "admins_id_fkey";

alter table "public"."messages" add constraint "messages_from_user_id_fkey" FOREIGN KEY (from_user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."messages" validate constraint "messages_from_user_id_fkey";

alter table "public"."messages" add constraint "messages_to_user_id_fkey" FOREIGN KEY (to_user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."messages" validate constraint "messages_to_user_id_fkey";

alter table "public"."provider" add constraint "providers_id_fkey" FOREIGN KEY (id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."provider" validate constraint "providers_id_fkey";

alter table "public"."user" add constraint "patient_email_key" UNIQUE using index "patient_email_key";

alter table "public"."user" add constraint "patient_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user" validate constraint "patient_id_fkey";

alter table "public"."appointment" add constraint "appointment_patient_user_id_fkey" FOREIGN KEY (patient_user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."appointment" validate constraint "appointment_patient_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  insert into public.user (id, email, full_name)
  values (
    new.id, 
    new.email,
    new.raw_user_meta_data->>'full_name'
    );
  return new;
end;$function$
;

grant delete on table "public"."messages" to "anon";

grant insert on table "public"."messages" to "anon";

grant references on table "public"."messages" to "anon";

grant select on table "public"."messages" to "anon";

grant trigger on table "public"."messages" to "anon";

grant truncate on table "public"."messages" to "anon";

grant update on table "public"."messages" to "anon";

grant delete on table "public"."messages" to "authenticated";

grant insert on table "public"."messages" to "authenticated";

grant references on table "public"."messages" to "authenticated";

grant select on table "public"."messages" to "authenticated";

grant trigger on table "public"."messages" to "authenticated";

grant truncate on table "public"."messages" to "authenticated";

grant update on table "public"."messages" to "authenticated";

grant delete on table "public"."messages" to "service_role";

grant insert on table "public"."messages" to "service_role";

grant references on table "public"."messages" to "service_role";

grant select on table "public"."messages" to "service_role";

grant trigger on table "public"."messages" to "service_role";

grant truncate on table "public"."messages" to "service_role";

grant update on table "public"."messages" to "service_role";

grant delete on table "public"."user" to "anon";

grant insert on table "public"."user" to "anon";

grant references on table "public"."user" to "anon";

grant select on table "public"."user" to "anon";

grant trigger on table "public"."user" to "anon";

grant truncate on table "public"."user" to "anon";

grant update on table "public"."user" to "anon";

grant delete on table "public"."user" to "authenticated";

grant insert on table "public"."user" to "authenticated";

grant references on table "public"."user" to "authenticated";

grant select on table "public"."user" to "authenticated";

grant trigger on table "public"."user" to "authenticated";

grant truncate on table "public"."user" to "authenticated";

grant update on table "public"."user" to "authenticated";

grant delete on table "public"."user" to "service_role";

grant insert on table "public"."user" to "service_role";

grant references on table "public"."user" to "service_role";

grant select on table "public"."user" to "service_role";

grant trigger on table "public"."user" to "service_role";

grant truncate on table "public"."user" to "service_role";

grant update on table "public"."user" to "service_role";

create policy "Enable update users their own messages"
on "public"."messages"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = from_user_id));


create policy "Enable users to delete their own messages"
on "public"."messages"
as permissive
for delete
to public
using ((( SELECT auth.uid() AS uid) = from_user_id));


create policy "Enable users to view their own messages"
on "public"."messages"
as permissive
for select
to authenticated
using (((( SELECT auth.uid() AS uid) = from_user_id) OR (( SELECT auth.uid() AS uid) = to_user_id)));


create policy "Enable patients to update their own info only"
on "public"."user"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = id));


create policy "Enable read access for all users"
on "public"."user"
as permissive
for select
to public
using (true);




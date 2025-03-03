drop policy "Enable update users their own messages" on "public"."messages";

drop policy "Enable users to delete their own messages" on "public"."messages";

drop policy "Enable users to view their own messages" on "public"."messages";

revoke delete on table "public"."messages" from "anon";

revoke insert on table "public"."messages" from "anon";

revoke references on table "public"."messages" from "anon";

revoke select on table "public"."messages" from "anon";

revoke trigger on table "public"."messages" from "anon";

revoke truncate on table "public"."messages" from "anon";

revoke update on table "public"."messages" from "anon";

revoke delete on table "public"."messages" from "authenticated";

revoke insert on table "public"."messages" from "authenticated";

revoke references on table "public"."messages" from "authenticated";

revoke select on table "public"."messages" from "authenticated";

revoke trigger on table "public"."messages" from "authenticated";

revoke truncate on table "public"."messages" from "authenticated";

revoke update on table "public"."messages" from "authenticated";

revoke delete on table "public"."messages" from "service_role";

revoke insert on table "public"."messages" from "service_role";

revoke references on table "public"."messages" from "service_role";

revoke select on table "public"."messages" from "service_role";

revoke trigger on table "public"."messages" from "service_role";

revoke truncate on table "public"."messages" from "service_role";

revoke update on table "public"."messages" from "service_role";

alter table "public"."messages" drop constraint "messages_from_user_id_fkey";

alter table "public"."messages" drop constraint "messages_to_user_id_fkey";

alter table "public"."messages" drop constraint "messages_pkey";

drop index if exists "public"."messages_pkey";

drop table "public"."messages";

create table "public"."chat" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "user1_id" uuid not null,
    "user2_id" uuid not null,
    "last_message_at" timestamp with time zone
);


alter table "public"."chat" enable row level security;

create table "public"."message" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "from_user_id" uuid not null,
    "to_user_id" uuid not null,
    "content" text not null,
    "chat_id" uuid not null
);


alter table "public"."message" enable row level security;

CREATE UNIQUE INDEX chat_pkey ON public.chat USING btree (id);

CREATE UNIQUE INDEX chat_unique_users ON public.chat USING btree (user1_id, user2_id);

CREATE UNIQUE INDEX message_pkey ON public.message USING btree (id, from_user_id, to_user_id);

alter table "public"."chat" add constraint "chat_pkey" PRIMARY KEY using index "chat_pkey";

alter table "public"."message" add constraint "message_pkey" PRIMARY KEY using index "message_pkey";

alter table "public"."chat" add constraint "chat_unique_users" UNIQUE using index "chat_unique_users";

alter table "public"."chat" add constraint "chat_user1_id_fkey" FOREIGN KEY (user1_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."chat" validate constraint "chat_user1_id_fkey";

alter table "public"."chat" add constraint "chat_user2_id_fkey" FOREIGN KEY (user2_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."chat" validate constraint "chat_user2_id_fkey";

alter table "public"."message" add constraint "messages_chat_id_fkey" FOREIGN KEY (chat_id) REFERENCES chat(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."message" validate constraint "messages_chat_id_fkey";

alter table "public"."message" add constraint "messages_from_user_id_fkey" FOREIGN KEY (from_user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."message" validate constraint "messages_from_user_id_fkey";

alter table "public"."message" add constraint "messages_to_user_id_fkey" FOREIGN KEY (to_user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."message" validate constraint "messages_to_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_last_message_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  update public.chat
  set last_message_at = now()
  where id = new.chat_id;
  return new;
end;
$function$
;

grant delete on table "public"."chat" to "anon";

grant insert on table "public"."chat" to "anon";

grant references on table "public"."chat" to "anon";

grant select on table "public"."chat" to "anon";

grant trigger on table "public"."chat" to "anon";

grant truncate on table "public"."chat" to "anon";

grant update on table "public"."chat" to "anon";

grant delete on table "public"."chat" to "authenticated";

grant insert on table "public"."chat" to "authenticated";

grant references on table "public"."chat" to "authenticated";

grant select on table "public"."chat" to "authenticated";

grant trigger on table "public"."chat" to "authenticated";

grant truncate on table "public"."chat" to "authenticated";

grant update on table "public"."chat" to "authenticated";

grant delete on table "public"."chat" to "service_role";

grant insert on table "public"."chat" to "service_role";

grant references on table "public"."chat" to "service_role";

grant select on table "public"."chat" to "service_role";

grant trigger on table "public"."chat" to "service_role";

grant truncate on table "public"."chat" to "service_role";

grant update on table "public"."chat" to "service_role";

grant delete on table "public"."message" to "anon";

grant insert on table "public"."message" to "anon";

grant references on table "public"."message" to "anon";

grant select on table "public"."message" to "anon";

grant trigger on table "public"."message" to "anon";

grant truncate on table "public"."message" to "anon";

grant update on table "public"."message" to "anon";

grant delete on table "public"."message" to "authenticated";

grant insert on table "public"."message" to "authenticated";

grant references on table "public"."message" to "authenticated";

grant select on table "public"."message" to "authenticated";

grant trigger on table "public"."message" to "authenticated";

grant truncate on table "public"."message" to "authenticated";

grant update on table "public"."message" to "authenticated";

grant delete on table "public"."message" to "service_role";

grant insert on table "public"."message" to "service_role";

grant references on table "public"."message" to "service_role";

grant select on table "public"."message" to "service_role";

grant trigger on table "public"."message" to "service_role";

grant truncate on table "public"."message" to "service_role";

grant update on table "public"."message" to "service_role";

create policy "delete_chat"
on "public"."chat"
as permissive
for delete
to public
using (((auth.uid() = user1_id) OR (auth.uid() = user2_id)));


create policy "insert_chat"
on "public"."chat"
as permissive
for insert
to public
with check (((auth.uid() = user1_id) OR (auth.uid() = user2_id)));


create policy "select_chat"
on "public"."chat"
as permissive
for select
to public
using (((auth.uid() = user1_id) OR (auth.uid() = user2_id)));


create policy "update_chat"
on "public"."chat"
as permissive
for update
to public
using (((auth.uid() = user1_id) OR (auth.uid() = user2_id)));


create policy "Enable update users their own messages"
on "public"."message"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = from_user_id));


create policy "Enable users to delete their own messages"
on "public"."message"
as permissive
for delete
to public
using ((( SELECT auth.uid() AS uid) = from_user_id));


create policy "Enable users to view their own messages"
on "public"."message"
as permissive
for select
to authenticated
using (((( SELECT auth.uid() AS uid) = from_user_id) OR (( SELECT auth.uid() AS uid) = to_user_id)));


CREATE TRIGGER update_last_message_at_trigger AFTER INSERT ON public.message FOR EACH ROW EXECUTE FUNCTION update_last_message_at();



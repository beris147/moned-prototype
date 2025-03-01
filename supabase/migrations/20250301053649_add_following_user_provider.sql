create table "public"."user_provider_follow" (
    "user_id" uuid not null,
    "provider_id" uuid not null,
    "followed_at" timestamp with time zone not null default now()
);


alter table "public"."user_provider_follow" enable row level security;

CREATE UNIQUE INDEX user_provider_follow_pkey ON public.user_provider_follow USING btree (user_id, provider_id);

alter table "public"."user_provider_follow" add constraint "user_provider_follow_pkey" PRIMARY KEY using index "user_provider_follow_pkey";

alter table "public"."user_provider_follow" add constraint "user_provider_follow_provider_id_fkey" FOREIGN KEY (provider_id) REFERENCES provider(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_provider_follow" validate constraint "user_provider_follow_provider_id_fkey";

alter table "public"."user_provider_follow" add constraint "user_provider_follow_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_provider_follow" validate constraint "user_provider_follow_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.generate_unique_cedula()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
  new_cedula text;
BEGIN
  LOOP
    -- Generate a random 10-digit number
    new_cedula := lpad((floor(random() * 10000000000))::text, 10, '0');
    -- Ensure the generated number is unique
    PERFORM 1 FROM public.provider WHERE cedula = new_cedula;
    EXIT WHEN NOT FOUND;
  END LOOP;
  RETURN new_cedula;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_random_degree()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
  degrees text[] := ARRAY[
    'Clinical Psychology', 'Counseling Psychology', 'Educational Psychology', 'Forensic Psychology',
    'Health Psychology', 'Neuropsychology', 'Organizational Psychology', 'School Psychology',
    'Social Psychology', 'Sports Psychology', 'Child Psychology', 'Experimental Psychology',
    'Developmental Psychology', 'Industrial-Organizational Psychology', 'Abnormal Psychology',
    'Cognitive Psychology', 'Behavioral Psychology', 'Psychotherapy', 'Human Factors Psychology',
    'Community Psychology'
  ];
  degree text;
BEGIN
  degree := degrees[ceil(random() * array_length(degrees, 1))];
  RETURN degree;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.get_random_full_name()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
  first_names text[] := ARRAY['Maria', 'Juan', 'Alex', 'Alexa', 'Marco', 'Sofia', 'Diego', 'Lucia', 'Pedro', 'Camila', 'Jose', 'Valentina', 'Luis', 'Martina', 'Miguel', 'Daniela', 'Antonio', 'Gabriela', 'Andres', 'Isabella'];
  last_names text[] := ARRAY['Perez', 'Gutierrez', 'Loyola', 'Urrutia', 'Zavala', 'Ramirez', 'Fernandez', 'Torres', 'Vargas', 'Castillo', 'Mendoza', 'Herrera', 'Morales', 'Rojas', 'Guerrero', 'Jimenez', 'Cruz', 'Reyes', 'Ortega', 'Chavez'];
  first_name text;
  last_name text;
BEGIN
  first_name := first_names[ceil(random() * array_length(first_names, 1))];
  last_name := last_names[ceil(random() * array_length(last_names, 1))];
  RETURN first_name || ' ' || last_name;
END;
$function$
;

grant delete on table "public"."user_provider_follow" to "anon";

grant insert on table "public"."user_provider_follow" to "anon";

grant references on table "public"."user_provider_follow" to "anon";

grant select on table "public"."user_provider_follow" to "anon";

grant trigger on table "public"."user_provider_follow" to "anon";

grant truncate on table "public"."user_provider_follow" to "anon";

grant update on table "public"."user_provider_follow" to "anon";

grant delete on table "public"."user_provider_follow" to "authenticated";

grant insert on table "public"."user_provider_follow" to "authenticated";

grant references on table "public"."user_provider_follow" to "authenticated";

grant select on table "public"."user_provider_follow" to "authenticated";

grant trigger on table "public"."user_provider_follow" to "authenticated";

grant truncate on table "public"."user_provider_follow" to "authenticated";

grant update on table "public"."user_provider_follow" to "authenticated";

grant delete on table "public"."user_provider_follow" to "service_role";

grant insert on table "public"."user_provider_follow" to "service_role";

grant references on table "public"."user_provider_follow" to "service_role";

grant select on table "public"."user_provider_follow" to "service_role";

grant trigger on table "public"."user_provider_follow" to "service_role";

grant truncate on table "public"."user_provider_follow" to "service_role";

grant update on table "public"."user_provider_follow" to "service_role";

create policy "Users can query, update and delete the providers they follow"
on "public"."user_provider_follow"
as permissive
for all
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));




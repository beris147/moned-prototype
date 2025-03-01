alter table "public"."user_provider_follow" add constraint "user_provider_follow_user_provider_check" CHECK ((user_id <> provider_id)) not valid;

alter table "public"."user_provider_follow" validate constraint "user_provider_follow_user_provider_check";



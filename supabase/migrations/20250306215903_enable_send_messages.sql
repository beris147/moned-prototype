create policy "Enable insert for users based on user_id"
on "public"."message"
as permissive
for insert
to public
with check ((( SELECT auth.uid() AS uid) = from_user_id));




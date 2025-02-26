create policy "Enable insert for authenticated users only"
on "public"."provider"
as permissive
for insert
to authenticated
with check (true);




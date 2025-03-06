alter table "public"."message" add column "read_receipt" timestamp without time zone;

comment on constraint chat_user1_id_fkey
  on public.chat
  is E'@graphql({"foreign_name": "user1", "local_name": "chat_user1"})';


comment on constraint chat_user2_id_fkey
  on public.chat
  is E'@graphql({"foreign_name": "user2", "local_name": "chat_user2"})';


comment on constraint messages_to_user_id_fkey
  on public.message
  is E'@graphql({"foreign_name": "to_user", "local_name": "messages_to_user"})';


comment on constraint messages_from_user_id_fkey
  on public.message
  is E'@graphql({"foreign_name": "from_user", "local_name": "messages_from_user"})';


comment on table public.chat is e'@graphql({"totalCount": {"enabled": true}})';




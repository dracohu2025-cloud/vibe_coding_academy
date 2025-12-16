-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store wiki embeddings
create table if not exists wiki_embeddings (
  id bigserial primary key,
  slug text not null,               -- e.g. "wiki_react"
  title text,                       -- e.g. "React"
  content text,                     -- The actual text chunk
  metadata jsonb,                   -- Extra info (section header, etc.)
  embedding vector(1536)            -- OpenAI standard dimension
);

-- Create a function to search for documents
create or replace function match_wiki_embeddings (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  slug text,
  title text,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    wiki_embeddings.id,
    wiki_embeddings.slug,
    wiki_embeddings.title,
    wiki_embeddings.content,
    wiki_embeddings.metadata,
    1 - (wiki_embeddings.embedding <=> query_embedding) as similarity
  from wiki_embeddings
  where 1 - (wiki_embeddings.embedding <=> query_embedding) > match_threshold
  order by wiki_embeddings.embedding <=> query_embedding
  limit match_count;
end;
$$;

# GraphQL Server with Apollo and Node

A simple GraphQL server made with Apollo and Node.

## Possible Queries

### Review Query

```graphql
query ReviewQuery($id: ID!) {
  review(id: $id) {
    rating
  }
}
```

### Games Query

```graphql
query GamesQuery($id: ID!) {
  game(id: $id) {
    title,
    platform
  }
}
```

### Nested Game Query

```graphql
query NestedGameQuery($id: ID!) {
  game(id: $id) {
    title,
    platform,
    reviews {
      rating,
      content,
      game_id
    }
  }
}
```

### Author Query

```graphql
query AuthorQuery($id: ID!) {
  author(id: $id) {
    name,
    verified
  }
}
```

### Nested Author Query

```graphql
query NestedAuthorQuery($id: ID!) {
  author(id: $id) {
    name,
    verified,
    reviews {
      rating,
      content,
      author_id,
    }
  }
}
```

### Nested Review Query

```graphql
query NestedReviewQuery($id: ID!) {
  review(id: $id) {
    rating,
    content,
    Game {
      title,
      platform,
      reviews {
        id,
        rating
      }
    }
  }
}
```

### Nested Review Author Query

```graphql
query NestedReviewAuthorQuery($id: ID!) {
  review(id: $id) {
    rating,
    content,
    Author {
      name,
      verified
    }
  }
}
```

## Possible Mutations

### Delete Mutation

```graphql
mutation DeleteMutation($id: ID!) {
  deleteGame(id: $id) {
    id,
    title,
    platform
  }
}
```

### Add Mutation

```graphql
mutation AddMutation($game: InputGame!) {
  addGame(game: $game) {
    title,
    platform
  }
}

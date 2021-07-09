# E-Commerce GraphQL API

## Queries

### categories

```graphql
query Categories {
  categories {
    id
    name
  }
}
```

### tags

```graphql
query Tags {
  tags {
    id
    name
  }
}
```

### products

```graphql
query Products {
  products {
    id
    name
    price
    stock
    onDisplay
    category {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
```
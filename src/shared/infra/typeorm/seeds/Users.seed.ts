import User from "@modules/users/infra/typeorm/entities/User";

export const UserSeed: User[] = [
  {
    id: "28152883-77c2-45be-9272-f3f4f0393a37",
    name: "Mtrix",
    email: "mtrix@mtrix.com.br",
    password: "$2a$08$HP8I08Q9jLrLQTMVxO0WKehgW6oikipRc.6oo/.9Tnn5kGkFfe8uS",
    created_at: new Date(),
    updated_at: new Date()
  }
];

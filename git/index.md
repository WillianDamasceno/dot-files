## Separar perfil pessoal do de trabalho

```
// .gitconfig

[user]
  name = 
  email =

[includeIf "gitdir:~/personal/"]
  path = ~/.gitconfig-personal
```

```
// .gitconfig-personal

[user]
  name = 
  email =
```
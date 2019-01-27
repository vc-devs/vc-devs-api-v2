# VC-DEVS-API-VS

## 1. Install Dependences

```
npm i
```

## 2. Install DevDependeces

```
npm i -g typescript
```

```
npm i -g ts-node
```

```
npm i -g typeorm
```

## 3. Enviroments

Copy `config.default` to `config.ts` and set enviroments

```
cp config.default cofing.ts
```


Copy `ormconfig.default` to `ormconfig.json` and set enviroments

```
cp ormconfig.default ormconfig.json
```


## 4. Run Project

```
npm start
```


## 5. Migrations

### 5.1 Generate
```
ts-node ./node_modules/typeorm/cli.js migrarion:generate -n MIGRATION_NAME
```

### 5.1 Create
```
ts-node ./node_modules/typeorm/cli.js migrarion:create -n MIGRATION_NAME
```

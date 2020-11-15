## Happy - App de Localização

#### :computer: Projeto com NodeJS, Express, Typescript, Leaftlet :computer:

**Happy** é uma aplicação que conecta pessoas a orfanatos com intuito de fazer o dia de muitas crianças mais feliz!

Aplicação desenvolvida durante o evento NLW (Next Level Week): uma experiência online para evoluir suas habilidades em programação e te elevar para o próximo nível.

:camera: **Screenshots de telas**

- :house:  **Página Inicial**
<p align="center"><img src="/images/landing-page.png"></p>

2. *Mapa dos Orfanatos*
<p align="center"><img src="/images/orphanages-map.png"></p>

3. *Detalhes do Orfanato e Localização*
<p align="center"><img src="/images/orphanage.png"></p>

4. *Cadastrar novo Orfanato*
<p align="center"><img src="/images/register-orphanage.png"></p>

:gear: **Tencologias utilizadas:**
- React
- Nodejs
- Express
- Typescript
- SQLite
- Typeorm
- Leaflet: lib js para mapas
- Yup

```
## Clone o repositório usando git
git clone https://github.com/orlando-messias/happy.git

## Abra a pasta web e instale as dependências frontend
cd web
yarn ou npm install

## Rode a aplicação frontend
npm start

## Abra a pasta server e instale as dependências backend
cd server
yarn ou npm install

## Crie as tabelas no banco de dados rodando comando de migrations
yarn typeorm migration:run

## Rode a aplicao backend
npm run dev
```

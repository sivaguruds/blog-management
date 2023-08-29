# blog-management

<!-- Sequelize new model generate -->

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

<!-- Sequelize migrate -->

npx sequelize-cli db:migrate

import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Teste', image: 'teste.png'},
    { title: 'Teste 1', image: 'teste.png'},
    { title: 'Teste 2', image: 'teste.png'},
    { title: 'Teste 3', image: 'teste.png'},
    { title: 'Teste 4', image: 'teste.png'},
  ])
}
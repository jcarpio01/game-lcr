import {pool} from "./database";

// games table
export async function createGamesTableIfNotExists() {
    const client = await pool.connect();
// create table in Postgress
    try {
        await client.query(`
        CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        playerChips INTEGER[] NOT NULL,
        centerChips INTEGER NOT NULL,
        winner INTEGER,
        lastPlayer INTEGER 
      )
    `);
        console.log('Games table loaded successfully')
    } finally {
        client.release();
    }
}

// game entity
export async function createGameEntity(playerChips: number[], centerChips: number, winner: number | undefined, lastPlayer: number | undefined) {
    const client = await pool.connect();
    try {
        const query = {
            text: 'INSERT INTO games(playerChips, centerChips, winner, lastPlayer) VALUES($1, $2, $3, $4)',
            values: [playerChips, centerChips, winner, lastPlayer],
        };
        await client.query(query);
    } catch (error) {
        console.error('Error creating entity', error);
    } finally {
        client.release();
    }
}

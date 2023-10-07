const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

const sequelize = new Sequelize('dvd-rental', 'postgres', 'Catwarna12', {
  host: 'localhost',
  dialect: 'postgres',
});

const Actor = sequelize.define('Actor', {
  name: {
    type: DataTypes.STRING,
  },
});

// Middleware untuk mengizinkan penggunaan JSON
app.use(express.json());

// Seeding data ke tabel Actor
app.post('/seed', async (req, res) => {
  try {
    await sequelize.sync({ force: true }); 
    const actorsData = [
      { Jefri_Nichol: 'Aktor 1' },
      { Nicholas_Saputra: 'Aktor 2' },
      { Refal_Hady: 'Aktor 3' },
      { Bryan_Domani: 'Aktor 4' },
      { Angga_Yunanda: 'Aktor 5' },
    ];
    await Actor.bulkCreate(actorsData);
    res.json({ message: 'Seeding berhasil' });
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).json({ message: 'Seeding gagal' });
  }
});

// Menampilkan data seluruh list film (implementasikan sesuai dengan model Film)
app.get('/films', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    console.error('Error fetching films data:', error);
    res.status(500).json({ message: 'Gagal mengambil data film' });
  }
});

// Menampilkan data film tertentu berdasarkan id (implementasikan sesuai dengan model Film)
app.get('/films/:id', async (req, res) => {
  const filmId = req.params.id;
  try {
    
    const film = await Film.findByPk(filmId);
    if (!film) {
      res.status(404).json({ message: 'Film tidak ditemukan' });
    } else {
      res.json(film);
    }
  } catch (error) {
    console.error('Error fetching film data:', error);
    res.status(500).json({ message: 'Gagal mengambil data film' });
  }
});

// Menampilkan data list category (implementasikan sesuai dengan model Category)
app.get('/categories', async (req, res) => {
  try {
    
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories data:', error);
    res.status(500).json({ message: 'Gagal mengambil data kategori' });
  }
});

// Menampilkan data list film berdasarkan category
app.get('/films-by-category/:categoryId', async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    
    const filmsInCategory = await Film.findAll({
      where: { categoryId: categoryId },
    });
    if (!filmsInCategory || filmsInCategory.length === 0) {
      res.status(404).json({ message: 'Film dalam kategori ini tidak ditemukan' });
    } else {
      res.json(filmsInCategory);
    }
  } catch (error) {
    console.error('Error fetching films data:', error);
    res.status(500).json({ message: 'Gagal mengambil data film' });
  }
});

// Menambahkan kolom "age" ke tabel Actor (implementasikan sesuai dengan model Actor)
app.post('/migrate', async (req, res) => {
  try {
    
    await sequelize.getQueryInterface().addColumn('actors', 'age', {
      type: Sequelize.INTEGER,
    });
    res.json({ message: 'Migrasi berhasil' });
  } catch (error) {
    console.error('Error migrating data:', error);
    res.status(500).json({ message: 'Migrasi gagal' });
  }
});


app.listen(port, () => {
  console.log('Aplikasi berjalan di http://localhost:${port)');
});

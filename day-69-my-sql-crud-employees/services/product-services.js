import { pool } from '../config/mysql-config.js'

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title LIKE '%${keyword}%'`
  )

  await Promise.all(
    rows.map(async (row) => {
      console.log(row)
      const descriptions = await getDescriptions(row.id)
      row.description = descriptions.map((d) => d.description)
      const reviews = await getReviews(row.id)
      row.reviews = reviews
      const images = await getImages(row.id)
      row.imgUrl = images
      const colors = await getColors(row.id)
      row.colors = colors.map((c) => c.color)
      console.log(descriptions)
    })
  )
  return rows[0]
}
export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`)
  await Promise.all(
    rows.map(async (row) => {
      console.log(row)
      const descriptions = await getDescriptions(row.id)
      row.description = descriptions.map((d) => d.description)
      const reviews = await getReviews(row.id)
      row.reviews = reviews
      const images = await getImages(row.id)
      row.imgUrl = images
      const size = await getSize(row.id)
      row.size = size.map((m) => m.size)
      const color = await getColors(row.id)
      row.color = color.map((c) => c.color)
      console.log(descriptions)
    })
  )
  return rows
}
export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `select * from product_description WHERE product_id=?`,
    [productId]
  )
  return rows
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select * from product_reviews WHERE product_id=?`,
    [productId]
  )
  return rows
}
export async function getImages(productId) {
  const [rows] = await pool.query(
    `select * from product_images WHERE product_id=?`,
    [productId]
  )
  return rows
}
export async function getSize(productId) {
  const [rows] = await pool.query(
    `select * from product_size WHERE product_id=?`,
    [productId]
  )
  return rows
}
export async function getColors(productId) {
  const [rows] = await pool.query(
    `select * from product_colors WHERE product_id=?`,
    [productId]
  )
  return rows
}

/**********************************************/

// import { pool } from "../config/mysql-config.js";

// export async function getAllProducts() {
//   const [rows] = await pool.query(`select * from products`);
//   await Promise.all(
//     rows.map(async (row) => {
//       console.log(row);
//       const descriptions = await getDescriptions(row.id);
//       row.description = descriptions.map((d) => d.description);
//       const reviews = await getReviews(row.id);
//       row.reviews = reviews;
//       const images = await getImages(row.id);
//       row.imgUrl = images;
//       const size = await getSize(row.id);
//       row.size = size.map((m) => m.size);
//       const color = await getColors(row.id);
//       row.color = color.map((c) => c.color);
//       console.log(descriptions);
//     })
//   );
//   return rows;
// }
// export async function search(keyword) {
//   const [rows] = await pool.query(
//     `select * from products WHERE title LIKE '%${keyword}%'`
//   );

//   await Promise.all(
//     rows.map(async (row) => {
//       console.log(row);
//       const descriptions = await getDescriptions(row.id);
//       row.description = descriptions.map((d) => d.description);
//       const reviews = await getReviews(row.id);
//       row.reviews = reviews;
//       const images = await getImages(row.id);
//       row.imgUrl = images;
//       const size = await getSize(row.id);
//       row.size = size;
//       const color = await getColors(row.id);
//       row.color = color.map((c) => c.color);
//       console.log(descriptions);
//     })
//   );
//   return rows[0];
// }
// export async function getDescriptions(productId) {
//   const [rows] = await pool.query(
//     `select * from product_description WHERE product_id=?`,
//     [productId]
//   );
//   return rows;
// }

// export async function getReviews(productId) {
//   const [rows] = await pool.query(
//     `select * from product_reviews WHERE product_id=?`,
//     [productId]
//   );
//   return rows;
// }
// export async function getImages(productId) {
//   const [rows] = await pool.query(
//     `select * from product_images WHERE product_id=?`,
//     [productId]
//   );
//   return rows;
// }
// export async function getSize(productId) {
//   const [rows] = await pool.query(
//     `select s.size from product_size ps LEFT JOIN size s ON s.id = ps.size_id  WHERE product_id=?`,
//     [productId]
//   );
//   return rows;
// }
// export async function getColors(productId) {
//   const [rows] = await pool.query(
//     `select c.color from product_colors pc LEFT JOIN color c ON c.id = pc.color_id  WHERE product_id=?`,
//     [productId]
//   );
//   return rows;
// }
// import { pool } from "../config/mysql-config.js";

// export async function getAllProducts() {
//   const [rows] = await pool.query(`select * from products`);
//   await Promise.all(
//     rows.map(async (row) => {
//       console.log(row);
//       const descriptions = await getDescriptions(row.id);
//       row.description = descriptions.map((d) => d.description);
//       const reviews = await getReviews(row.id);
//       row.reviews = reviews;
//       const images = await getImages(row.id);
//       row.imgUrl = images;
//       const size = await getSize(row.id);
//       row.size = size.map((m) => m.size);
//       const color = await getColors(row.id);
//       row.color = color.map((c) => c.color);
//       console.log(descriptions);
//     })
//   );
//   return rows;
// }
// export async function search(keyword) {
//   const [rows] = await pool.query(
//     `select * from products WHERE title LIKE '%${keyword}%'`
//   );

//   await Promise.all(
//     rows.map(async (row) => {
//       console.log(row);
//       const descriptions = await getDescriptions(row.id);
//       row.description = descriptions.map((d) => d.description);
//       const reviews = await getReviews(row.id);
//       row.reviews = reviews;
//       const images = await getImages(row.id);
//       row.imgUrl = images;
//       const size = await getSize(row.id);
//       row.size = size;
//       const color = await getColors(row.id);
//       row.color = color.map((c) => c.color);
//       console.log(descriptions);
//     })
//   );
// retu

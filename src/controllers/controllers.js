const MySQL = require('./../services/mysql');

const insert = async (req, res) => {
	const item = {
		name: req.body.name,
		author: req.body.author
	}
	await MySQL.insert(item);
	return res.json({message: "Created book!"});
}

const find = async (req, res) => {
  const result = await MySQL.find();
  let html = `<table>
  <tr>
	<th>id<th>
    <th>name</th>
    <th>author</th> 
    <th>published date</th>
  </tr>`;
  result.forEach(item => {
	  html += `<tr>
	<td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.author}</td>
    <td>${item.published_date}</td>
  </tr>`;
  })
  html += `</table>`;
  return res.send(html);
};

module.exports = {
  insert: insert,
  find: find,
};

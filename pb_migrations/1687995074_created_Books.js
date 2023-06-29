migrate((db) => {
  const collection = new Collection({
    "id": "gxjg35rhgmgxbyy",
    "created": "2023-06-28 23:31:14.595Z",
    "updated": "2023-06-28 23:31:14.595Z",
    "name": "Books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tj5twrzf",
        "name": "username",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "username"
          ]
        }
      },
      {
        "system": false,
        "id": "xjl3mlaj",
        "name": "Title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ob23k72b",
        "name": "Author",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vstylysu",
        "name": "Picture",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "gzpkptud",
        "name": "Genre",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 3,
          "values": [
            "Fiction",
            "Mystery",
            "Fantasy",
            "Science Fiction",
            "Non-fiction",
            "Horror/Thriller",
            "Historical Fiction",
            "Short Story",
            "Romance",
            "Poetry",
            "Graphic Novel",
            "Biography",
            "Memoir",
            "Autobiography"
          ]
        }
      },
      {
        "system": false,
        "id": "akvuub89",
        "name": "Rating",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "ync4fje1",
        "name": "Review",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 15000,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_823McfX` ON `Books` (`id`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gxjg35rhgmgxbyy");

  return dao.deleteCollection(collection);
})

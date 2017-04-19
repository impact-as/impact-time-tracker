import { Injectable } from '@angular/core';

declare var require: any;
let Datastore = require('nedb');

const dataB = 'database.db';

@Injectable()
export class DatabaseService {

	public db: any;

	constructor() {
		this.db = new Datastore({
			filename: dataB,
			autoload: true
		});
	}

	insert(item: any) {
		return new Promise((resolve, reject) => {
			return this.db.insert(item, ((err: any, newItem: any) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(newItem);
				}
			}));
		});
	}
	findAll() {
		return new Promise((resolve, reject) => {
			return this.db.find({}, ((err: any, items: any) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(items);
				}
			}));
		});
	}

	update(item: any) {
		return new Promise((resolve, reject) => {
			return this.db.update({ _id: item._id }, { $set: item }, ((err: any, NumReplaced: any) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(NumReplaced);
				}
			}));
		});
	}

	remove(id: any) {
		return new Promise((resolve, reject) => {
			return this.db.remove({ _id: id }, {}, ((err: any, numRemoved: any) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(numRemoved);
				}
			}));
		});
	}
}

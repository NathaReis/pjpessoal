import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  // add user
  addUser(user: User)
  {
    user.id = this.afs.createId();
    return this.afs.collection('/Users').add(user);
  }

  // get all users
  getAllUsers()
  {
    return this.afs.collection('/Users').snapshotChanges();
  }

  // delete user
  deleteUser(user: User)
  {
    return this.afs.doc('/Users/'+user.id).delete();
  }

  // update user
  updateUser(user: User)
  {
    this.deleteUser(user);
    this.addUser(user);
  }
}

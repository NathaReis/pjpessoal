import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  //USER
  
  // add user
  addUser(user: User)
  {
    user.id = this.afs.createId();
    return this.afs.collection('/users').add(user);
  }
  // get all users
  getAllUsers()
  {
    console.log('GetAllUsers')
    return this.afs.collection('/users').snapshotChanges();
  }
  // delete user
  deleteUser(user: User)
  {
    return this.afs.doc('/users/'+user.id).delete();
  }
  // update user
  updateUser(user: User)
  {
    this.deleteUser(user);
    this.addUser(user);
  }
}

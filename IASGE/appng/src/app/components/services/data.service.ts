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
    return this.afs.collection('/users').snapshotChanges();
  }
  // get one users
  getUser(id: string)
  {
    return this.afs.doc(`/users/${id}`).get();
  }
  // delete user
  deleteUser(id: string)
  {
    return this.afs.doc(`/users/${id}`).delete();
  }
  // update user
  updateUser(user: User, id: string)
  {
    this.afs.doc(`users/${id}`).update(user);
  }

  //PERFIL
  // get all perfis
  getAllPerfis()
  {
    return this.afs.collection('/perfis').snapshotChanges();
  }
}

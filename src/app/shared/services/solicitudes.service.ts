import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  userId: string;
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  public getSolicitudes(userId) {
    return this.firestore.collection('solicitudes', ref => ref.where('floreriaId', '==', userId)).snapshotChanges();
  }

  public getPedidos(userId) {
    // tslint:disable-next-line:max-line-length
    return this.firestore.collection('solicitudes', ref => ref.where('status', '==', true).where('floreriaId', '==', userId)).snapshotChanges();
  }

  // Actualiza una solicitud
  public updateSolicitud(documentId: string) {
    return this.firestore.collection('solicitudes').doc(documentId).update({
      status: true
    });
  }

  public updatePedido(documentId: string) {
    return this.firestore.collection('solicitudes').doc(documentId).update({
      entregado: true
    });
  }


  userIdGet() {
    this.afAuth.authState.subscribe(user => {
      this.setUserId(user.uid);

    });
  }

  setUserId(data) {
    this.userId = data;
  }


  markerUserId(userId) {
    this.afAuth.authState.subscribe(user => {
      this.userId = user.uid;
      if (userId === this.userId) {
        return true;
      }
    });
  }
}

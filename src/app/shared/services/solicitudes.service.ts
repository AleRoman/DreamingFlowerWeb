import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public getSolicitudes() {
    return this.firestore.collection('solicitudes').snapshotChanges();
  }

   // Actualiza una solicitud
   public updateCat(documentId: string, data: any) {
    return this.firestore.collection('solicitudes').doc(documentId).set(data);
  }
}

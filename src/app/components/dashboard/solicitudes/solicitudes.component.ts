import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { HttpHeaders } from '@angular/common/http';
import { SolicitudesService } from 'src/app/shared/services/solicitudes.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  public solicitudes = [];
  private userId; string;
  constructor(
    private http: HttpClient,
    private sService: SolicitudesService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.userId = user.uid;
      this.sService.getSolicitudes(this.userId).subscribe((solicitudessSnapshot) => {
        this.solicitudes = [];
        solicitudessSnapshot.forEach((solicitudData: any) => {
          this.solicitudes.push({
            id: solicitudData.payload.doc.id,
            data: solicitudData.payload.doc.data()
          });
        });
      });


    });

  }

  sendNotification(token, id) {
    const body = {
      'notification': {
        'title': 'Pedido aceptado',
        'body': 'Tu arreglo será realizado, gracias por tu compra',
        'sound': 'default',
        'click_action': 'FCM_PLUGIN_ACTIVITY',
        'icon': 'fcm_push_icon'
      },
      'data': {
        'param1': 'value1',
        'param2': 'value2'
      },
      'to': token,
      'priority': 'high',
      'restricted_package_name': ''
    };
    const options = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('https://fcm.googleapis.com/fcm/send', body, {
      // tslint:disable-next-line:max-line-length
      headers: options.set('Authorization', 'key=AAAAnq8A9Qo:APA91bFbhV5R7mnAQrRUtH6WZMOfemOKyJPLVLnM2BFG4tL6l-z59VzVOoINz6Cmx_Qt7bK100zjd1kru8qVvchP_hujdcozXDb375OSKkWXP7EezeNIqC1pQJDVrYsGh473mOToDB9i'),
    })
      .subscribe();

    console.log('lo hice');
    this.updateSolicitud(id);
  }

  updateSolicitud(documentId: string) {
    console.log('lo hice también');
    this.sService.updateSolicitud(documentId);
  }


}

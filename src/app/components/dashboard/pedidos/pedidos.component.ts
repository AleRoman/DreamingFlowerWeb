import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  sendNotification() {
    const body = {
      'notification': {
        'title': 'Tu pedido ha sido entregado',
        'body': 'Tienes 24 horas para recogerlo',
        'sound': 'default',
        'click_action': 'FCM_PLUGIN_ACTIVITY',
        'icon': 'fcm_push_icon'
      },
      'data': {
        'param1': 'value1',
        'param2': 'value2'
      },
      'to': '/topics/all',
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
  }

}

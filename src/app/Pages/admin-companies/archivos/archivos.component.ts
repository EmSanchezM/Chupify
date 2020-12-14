import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'assets/images/tiendas/cosmetics-shop.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'assets/images/tiendas/gold-shop.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'assets/images/tiendas/natural-shop.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'assets/images/tiendas/decoraciones.jpg'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ];
  
  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

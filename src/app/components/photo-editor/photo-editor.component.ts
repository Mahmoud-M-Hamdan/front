import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-editor.component.html',
})
export class PhotoUploadComponent {
  // isload: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private photoService: PhotoService,
    public httpser: HttpserviceService,
    private toastr: ToastrService
  ) {}

  onFileSelected(event: any): void {
    console.log('changed!');
    this.httpser.isLoading.next(true); 
    // console.log(this.isload.getValue());
    console.log(event);
    
    const file: File = event.target.files[0];
    this.photoService.uploadPhoto(file).subscribe(
      (response:{}) => {
        let photos = [...this.photoService.arr.getValue(),response]
        console.log('photos: ', photos);
        this.photoService.arr.next(photos)
        console.log(response);
        console.log('Photo uploaded successfully:', response);
        // this.photoService.getPhotos();
      },
      (error) => {
        console.error('Error uploading photo:', error);
      },
      ()=>{
        this.httpser.isLoading.next(false); 
        this.toastr.success('Photo uploaded successfully 😃 ');
      }
    
      );
      // this.isload.next(false);

      event.target.value=null;
  }
}

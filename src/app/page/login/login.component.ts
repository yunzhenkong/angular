import { Component, OnInit ,Output, Input} from '@angular/core';//导入获取参数的方法Input
import any = jasmine.any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() msg//获取父组件的参数
  constructor() { }

  ngOnInit(): void {
    this.title=this.msg//赋值给变量title
  }

}

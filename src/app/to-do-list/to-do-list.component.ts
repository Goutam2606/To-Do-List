import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false },
  { taskName: "Read 5 Page of Book ", isCompleted: true },
  { taskName: "Running", isCompleted: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}

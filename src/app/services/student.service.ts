import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Subject} from "../models/subject.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) { }

  getAllSubjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.studentUrl}/allsubjects`);
  }

  enrollSubject(subjectId: number): Observable<any> {
    return this.http.patch<any>(`${this.studentUrl}/subjects/${subjectId}`, {});
  }

  getEnrolledSubjects(): Observable<Subject[]> {
    const url = `${this.studentUrl}/enrolledsubjects`
    return this.http.get<Subject[]>(url);
  }
}

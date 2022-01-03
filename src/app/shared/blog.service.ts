import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class blogService {
  private apiUrl='http://localhost:3000/Blog';

  // API BACKEND
 // private apiUrl='http://localhost:3000/api/blogs';


  constructor(private http: HttpClient) {}
  /**
   *Get all blog
   * @returns Observable<Blog[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }
  
  /**
   * Get a cblog with the given id
   * @param id : blog id
   * @returns Observable<Client>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }
  
  /**
   * Create a new blog
   * @param client new client to create
   */
  create(blog: any) {
    return this.http.post(this.apiUrl, blog);
  }
  
  /**
   * Update a blog with the given id
   * @param _id blog id to update
   * @param client new blog data
   */
  update(id: string, blog : any) {
    return this.http.put(this.apiUrl + '/' + id, blog);
  }
  
  /**
   * Delete a blog with the given id
   * @param id blog id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}

import { Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PaginatedResponse, PaginatedRequest } from '../data';

@Injectable()
export class ForInMemoryInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { processed, raw } = this.hidePaginationRequestParams(req);
    const newReq = processed || raw;

    return next.handle(newReq).pipe(map(event => {
      if (event.type !== HttpEventType.Response || !processed) {
        return event;
      }

      const body = this.imitatePagination(req, event);

      return event.clone({ body });
    }));
  }

  private hidePaginationRequestParams(req: HttpRequest<any>): { processed, raw } {
    if (!req.params.has('page')) {
      return { raw: req, processed: null }
    }

    let newParams = req.params.delete('page');
    newParams = newParams.delete('pageSize');
    const processed = req.clone({ params: newParams })

    return { raw: req, processed }
  }

  private imitatePagination(req: HttpRequest<any>, event: HttpResponse<any>) {
    const page = +req.params.get('page');
    const pageSize = +req.params.get('pageSize');
    const start = page * pageSize;
    const body: PaginatedResponse = {
      page,
      totalSize: event.body.length,
      children: event.body.slice(start, start + pageSize)
    }

    return body;
  }
}
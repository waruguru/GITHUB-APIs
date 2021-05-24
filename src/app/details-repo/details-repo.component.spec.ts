import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRepoComponent } from './details-repo.component';

describe('DetailsRepoComponent', () => {
  let component: DetailsRepoComponent;
  let fixture: ComponentFixture<DetailsRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

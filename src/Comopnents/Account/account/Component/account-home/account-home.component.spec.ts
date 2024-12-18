import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHomeComponent } from './account-home.component';

describe('AccountHomeComponent', () => {
  let component: AccountHomeComponent;
  let fixture: ComponentFixture<AccountHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

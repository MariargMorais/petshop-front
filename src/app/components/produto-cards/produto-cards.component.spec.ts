import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardsComponent } from './produto-cards.component';

describe('ProdutoCardsComponent', () => {
  let component: ProdutoCardsComponent;
  let fixture: ComponentFixture<ProdutoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

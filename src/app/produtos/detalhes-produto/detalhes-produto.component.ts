import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  quantidade = 1;
  produto:IProduto | undefined;

  constructor(private produtosService: ProdutosService,
              private route : ActivatedRoute,
              private notificacaoService: NotificacaoService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const produtoId = Number(routeParam.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto : IProdutoCarrinho = {
      ...this.produto!,
      quantidade : this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}

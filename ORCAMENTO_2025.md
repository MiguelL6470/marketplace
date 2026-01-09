# Orçamento do Projeto - Marketplace MVP 2025

## 📋 Resumo Executivo

Este documento detalha todos os custos envolvidos no projeto MVP do Marketplace, desde o desenvolvimento até a entrega e operação inicial.

**Valor do Desenvolvimento:** R$ 1.800,00 (pagamento único)

---

## 💰 Custos de Desenvolvimento

| Item | Valor | Observações |
|------|-------|-------------|
| **Desenvolvimento MVP + Sistema de Planos** | R$ 1.800,00 | Pagamento único |
| **Total Desenvolvimento** | **R$ 1.800,00** | |

---

## 🚀 Custos de Infraestrutura (Mensais)

### 1. Hospedagem - Vercel Pro
| Item | Valor USD | Valor BRL (cotação ~R$ 5,85) | Observações |
|------|-----------|------------------------------|-------------|
| **Vercel Pro** | $20/mês | **R$ 117,00/mês** | Necessário para produção (SSL grátis, CDN, analytics) |
| **Plano Free** | $0 | R$ 0 | Não recomendado para produção (limitações de build) |

### 2. Banco de Dados - Neon PostgreSQL
| Item | Plano | Valor Mensal | Observações |
|------|-------|--------------|-------------|
| **Neon Starter** | Pay-as-you-go | **R$ 30,00/mês** | Inclui 0.5 GB de storage + 100 horas compute |
| **Neon Launch** | Fixo | R$ 79,00/mês | 10 GB storage + 200 horas compute |
| **Neon Scale** | Fixo | R$ 199,00/mês | 50 GB storage + 500 horas compute |

**Recomendação para MVP:** Neon Starter (R$ 30/mês) - suficiente para começar

### 3. Armazenamento de Imagens - Supabase Storage
| Item | Plano | Valor Mensal | Observações |
|------|-------|--------------|-------------|
| **Free Tier** | Gratuito | R$ 0,00 | 1 GB storage + 2 GB bandwidth |
| **Pro (se necessário)** | Pago | R$ 29,00/mês | 100 GB storage + 200 GB bandwidth |

**Recomendação para MVP:** Free Tier (R$ 0) - suficiente para início. Atualizar se necessário.

### 4. Sistema de Pagamentos (Gateway)
#### Opção A: Mercado Pago (Recomendado para Brasil)
| Item | Taxa | Observações |
|------|------|-------------|
| **Taxa por transação** | 4,99% + R$ 0,39 | Cartão de crédito |
| **Taxa por transação** | 3,99% + R$ 0,39 | Cartão de débito |
| **PIX** | 1,99% | Sem custo mensal fixo |
| **Cobrança Recorrente** | Mesmas taxas | Para sistema de planos |
| **Custo mensal fixo** | **R$ 0,00** | Sem mensalidade |

#### Opção B: Stripe
| Item | Taxa | Observações |
|------|------|-------------|
| **Taxa por transação** | 3,99% + R$ 0,40 | Cartão de crédito/débito |
| **PIX** | Não disponível | Apenas cartões |
| **Cobrança Recorrente** | Mesmas taxas | Para sistema de planos |
| **Custo mensal fixo** | **R$ 0,00** | Sem mensalidade |

**Recomendação:** Mercado Pago (melhor para Brasil, suporta PIX)

**Observação:** As taxas são cobradas apenas sobre transações processadas. Não há custo fixo mensal.

---

## 📊 Resumo de Custos Mensais

### Cenário Básico (MVP Inicial)
| Serviço | Valor Mensal |
|---------|--------------|
| Vercel Pro | R$ 117,00 |
| Neon PostgreSQL (Starter) | R$ 30,00 |
| Supabase Storage (Free) | R$ 0,00 |
| Gateway Pagamento (Mercado Pago) | R$ 0,00* |

| **TOTAL MENSAL** | **R$ 147,00** |

*Sem custo fixo, apenas taxas por transação

### Cenário com Uso de Storage (se necessário)
| Serviço | Valor Mensal |
|---------|--------------|
| Vercel Pro | R$ 117,00 |
| Neon PostgreSQL (Starter) | R$ 30,00 |
| Supabase Storage (Pro) | R$ 29,00 |
| Gateway Pagamento (Mercado Pago) | R$ 0,00* |
| **TOTAL MENSAL** | **R$ 176,00** |

---

## 💳 Custos Totais Estimados

### Até a Entrega do MVP (1 mês)
| Item | Valor |
|------|-------|
| Desenvolvimento | R$ 1.800,00 |
| Infraestrutura (1 mês) | R$ 147,00 |
| **TOTAL** | **R$ 1.947,00** |

### Custo Operacional Anual (após MVP)
| Item | Valor Anual |
|------|-------------|
| Infraestrutura (12 meses) | R$ 1.764,00 |
| **TOTAL ANUAL** | **R$ 1.764,00** |
| **Média Mensal** | **R$ 147,00** |

---

## ⚠️ Custos Adicionais a Considerar

### 1. Taxas de Transação (Gateway)
- **Cobradas apenas sobre vendas processadas**
- **Estimativa:** 3,99% - 4,99% do valor transacionado
- **Exemplo:** Se processar R$ 1.000/mês em vendas:
  - Mercado Pago: ~R$ 49,90/mês (taxa)
  - Stripe: ~R$ 43,90/mês (taxa)

### 2. Escalabilidade (Futuro)
Se o projeto crescer, podem ser necessários:
- **Neon Launch/Scale:** Até R$ 199/mês (se necessário mais recursos)
- **Vercel Enterprise:** Sob consulta (se necessário mais features)
- **CDN adicional:** R$ 50-200/mês (se necessário)

### 3. Monitoramento e Ferramentas
- **Sentry (opcional):** R$ 0-26/mês (monitoramento de erros)
- **Analytics avançado:** R$ 0-50/mês (Google Analytics Pro ou similar)

---

## 📝 Recomendações para o Cliente

### Setup Inicial (MVP)
1. **Vercel Pro:** R$ 117/mês (essencial)
2. **Neon Starter:** R$ 30/mês (suficiente para MVP)
3. **Supabase Free:** R$ 0 (até 1GB de imagens)
4. **Mercado Pago:** R$ 0 fixo (apenas taxas por transação)

**Total mínimo mensal: R$ 147,00**

### Previsão de Crescimento
- **Mês 1-3:** R$ 147,00/mês (básico)
- **Mês 4-6:** R$ 176,00/mês (se precisar de mais storage)
- **Mês 7+:** Ajustar conforme uso real

---

## 🎯 Observações Importantes

1. **Taxas de Gateway:** As taxas de pagamento (Mercado Pago/Stripe) são cobradas apenas sobre transações processadas. Não há custo fixo mensal.

2. **Custos Variáveis:** O Neon e Supabase podem ter custos variáveis conforme o uso. Os valores indicados são para o plano básico.

3. **SSL:** Incluído gratuitamente no Vercel Pro.

4. **Backup:** O Neon inclui backups automáticos no plano pago.

---

## 📞 Próximos Passos

1. Confirmar com o cliente:
   - Volume esperado de transações (para estimar taxas)
   - Expectativa de crescimento (para planejar escalabilidade)

2. Contratar serviços:
   - Vercel Pro
   - Neon PostgreSQL
   - Supabase (Storage)
   - Mercado Pago ou Stripe

3. Implementar integração de pagamento real (substituir simulação atual)

---

**Data do Orçamento:** Janeiro 2025  
**Validade:** 30 dias  
**Cotação USD/BRL:** ~R$ 5,85 (verificar antes de fechar)


API criada para gerar uma listagem com os clubes de futebol que disputaram a UEFA Champions League ou a UEFA Euro League da temporada atual.
Foi desenvolvido dois end points para gerar esta listagem em formato JSON.
--------------------------------------------------------------------------------------------
End Point => /api/champions
Esta gera os clubes que disputaram a champions league
End Point => /api/euro
Esta gera os clubes que disputaram a europa league

Ao final destes end points de extração de dados foi desenvolvido uma query String para que possa ser filtrado por nome do Time.
Exemplo: /api/champions?consulta=nome do time 
Este filtro retorna um novo vetor com o objeto JSON contendo os dados do time filtrado
--------------------------------------------------------------------------------------------


Foi desenvolvido outro end point que gera em JSON os dados do autor da aplicação => /api/info

Esta aplicação está extraindo dados do site https://pt.uefa.com/ foi utilizado o método Scrapper para extrair os dados de tags especificas do site.
SELECT * FROM venda;
SELECT * FROM vendedor;

SELECT vendedor.nome, AVG(venda.valor)/WEEKDAY(CURDATE()) AS media_vendas_diaria FROM venda 
JOIN vendedor ON venda.id = vendedor.id
WHERE YEARWEEK(data_venda) = YEARWEEK(CURDATE()) 
GROUP BY venda.id 
ORDER BY media_vendas_diaria DESC 
LIMIT 10;

SELECT vendedor.nome, SUM(venda.valor)/WEEKDAY(CURDATE()) AS media_vendas_diaria
FROM venda
JOIN vendedor ON venda.id = vendedor.id
WHERE YEARWEEK(data_venda) = YEARWEEK(CURDATE())
GROUP BY venda.id
ORDER BY media_vendas_diaria DESC
LIMIT 10;

SELECT nome, media_vendas_diaria
FROM (
  SELECT vendedor.nome,
         SUM(venda.valor)/WEEKDAY(CURDATE()) AS media_vendas_diaria,
         RANK() OVER (ORDER BY SUM(venda.valor)/WEEKDAY(CURDATE()) DESC) AS ranking
  FROM venda
  JOIN vendedor ON venda.id = vendedor.id
  WHERE YEARWEEK(data_venda) = YEARWEEK(CURDATE())
  GROUP BY venda.id
) AS ranked_vendedores
WHERE ranking <= 10;
USE educacao

IF OBJECT_ID('[dbo].[escolas]', 'U') IS NOT NULL
DROP TABLE [dbo].[escolas]
GO

CREATE TABLE [dbo].[escolas]
(
    [idescola] INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    [nome] NVARCHAR(100) NOT NULL,
    [logradouro] NVARCHAR(200) NULL,
    [numero] INT NULL,
    [bairro] NVARCHAR(50) NULL,
    [cep] NVARCHAR(8) NULL,
    [cnpj] NVARCHAR(14) NOT NULL
);
GO
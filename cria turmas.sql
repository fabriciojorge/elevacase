USE educacao

IF OBJECT_ID('[dbo].[turmas]', 'U') IS NOT NULL
DROP TABLE [dbo].[turmas]
GO

CREATE TABLE [dbo].[turmas]
(
    [idturma] INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    [idescola] INT NOT NULL,
    [codturma] NVARCHAR(5) NULL,
    [anoletivo] NVARCHAR(10) NULL,
    [disciplina] NVARCHAR(50) NOT NULL,
    [nomeprofessor] NVARCHAR(100) NULL,
    [turno] NVARCHAR(10) NOT NULL
);
GO

ALTER TABLE [dbo].[turmas]  WITH CHECK ADD CONSTRAINT [FK_ESCOLA_TURMA] FOREIGN KEY([idescola])
REFERENCES [dbo].[escolas] ([idescola])
GO

ALTER TABLE [dbo].[turmas] CHECK CONSTRAINT [FK_ESCOLA_TURMA]
GO
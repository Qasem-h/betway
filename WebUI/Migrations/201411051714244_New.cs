namespace WebUI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class New : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Bets", "ExtraValue");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Bets", "ExtraValue", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}

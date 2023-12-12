import { Model, DataTypes, Sequelize} from "sequelize";


interface AccountsTypes {
  id: string;
  branch: number;
  account: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

export default class Accounts extends Model<AccountsTypes> implements AccountsTypes {
    id!: string;
    branch!: number;
    account!: string;
    balance!: number;
    createdAt!: Date;
    updatedAt!: Date;
}

Accounts.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING(150),
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    branch: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    account: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true
    },
    balance: {
      allowNull: true,
      type: DataTypes.FLOAT,
      defaultValue: 0.00
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    },

}, {
    sequelize: new Sequelize(),
    modelName: 'Account',
    timestamps: false,
    freezeTableName: true,
})
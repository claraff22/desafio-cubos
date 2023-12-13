import { Model, DataTypes, Sequelize} from "sequelize";
import config from '../config/database'
import Accounts from "./account";


export interface TransactionTypes {
  id: string;
  type: string;
  value: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  account_ID: string;
}

export default class Transaction extends Model<TransactionTypes> implements TransactionTypes {
    id!: string;
    type!: string;
    value!: number;
    description!: string;
    createdAt!: Date;
    updatedAt!: Date;
    account_ID!: string;
}

const sequelize = new Sequelize(config)

Transaction.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [['debit', 'credit']],
      },
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(150),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    account_ID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Account',
        key: 'id'
      }
    }

}, {
    sequelize: sequelize,
    modelName: 'Transaction',
    timestamps: false,
    freezeTableName: true,
})

Accounts.hasMany(Transaction, {foreignKey: 'account_ID'})
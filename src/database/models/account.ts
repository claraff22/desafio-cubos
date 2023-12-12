import { Model, DataTypes, Sequelize} from "sequelize";
import config from '../config/database'

export interface AccountsTypes {
  id: string;
  branch: string;
  account: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  people_ID: string;
}

export default class Accounts extends Model<AccountsTypes> implements AccountsTypes {
    id!: string;
    branch!: string;
    account!: string;
    balance!: number;
    createdAt!: Date;
    updatedAt!: Date;
    people_ID!: string;
}

const sequelize = new Sequelize(config) 

Accounts.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    branch: {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    account: {
        allowNull: false,
        type: DataTypes.STRING,
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
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    people_ID: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'People',
        key: 'id'
      }
    }

}, {
    sequelize: sequelize,
    modelName: 'Account',
    timestamps: false,
    freezeTableName: true,
})
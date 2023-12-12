import { Model, DataTypes, Sequelize} from "sequelize";
import config from '../config/database'
import Accounts from "./account";
import { ForeignKey } from "sequelize-typescript";

// enum cardTypeEnum {
//    'physical' , 
//     'virtual'
// }

export interface CardTypes {
  id: string;
  type: string;
  number: string;
  cvv: string;
  createdAt: Date;
  updatedAt: Date;
  account_ID: string;
}

export default class Card extends Model<CardTypes> implements CardTypes {
    id!: string;
    type!: string;
    number!: string;
    cvv!: string;
    createdAt!: Date;
    updatedAt!: Date;
    account_ID!: string;
}

const sequelize = new Sequelize(config) 

Card.init({
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
          isIn: [['physical', 'virtual']],
        },
    },
    number: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    cvv: {
        allowNull: false,
        type: DataTypes.STRING
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
      type: DataTypes.STRING,
      references: {
        model: 'Account',
        key: 'id'
      }
    }

}, {
    sequelize: sequelize,
    modelName: 'Card',
    timestamps: false,
    freezeTableName: true,
})

Accounts.hasMany(Card, {foreignKey: 'account_ID'})
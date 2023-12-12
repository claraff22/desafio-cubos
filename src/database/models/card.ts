import { Model, DataTypes, Sequelize} from "sequelize";
import config from '../config/database'

enum cardTypeEnum {
    'physical', 'virtual'
}

interface CardTypes {
  id: string;
  type: cardTypeEnum;
  number: string;
  cvv: number;
  createdAt: Date;
  updatedAt: Date;
}

export default class Card extends Model<CardTypes> implements CardTypes {
    id!: string;
    type!: number;
    number!: string;
    cvv!: number;
    createdAt!: Date;
    updatedAt!: Date;
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
        type: DataTypes.ENUM('physical, virtual'),
        allowNull: false, 
    },
    number: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    cvv: {
        allowNull: false,
        type: DataTypes.INTEGER
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

}, {
    sequelize: sequelize,
    modelName: 'Card',
    timestamps: false,
    freezeTableName: true,
})
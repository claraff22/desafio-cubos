import { Model, DataTypes, Sequelize} from "sequelize";
import config from '../config/database'

export interface PeopleTypes {
  id: string;
  name: string;
  document: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class People extends Model<PeopleTypes> implements PeopleTypes {
    id!: string;
    name!: string;
    document!: string;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

const sequelize = new Sequelize(config) 

People.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(150),
      },
    document: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    password: {
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

}, {
    sequelize: sequelize,
    modelName: 'People',
    timestamps: false,
    freezeTableName: true,
})
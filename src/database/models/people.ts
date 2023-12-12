import { Model, DataTypes, Sequelize} from "sequelize";


interface PeopleTypes {
  name: string;
  document: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class People extends Model<PeopleTypes> implements PeopleTypes {
    name!: string;
    document!: number;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

People.init({
    name: {
        allowNull: false,
        type: DataTypes.STRING(150),
      },
    document: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
    sequelize: new Sequelize(),
    modelName: 'people',
    timestamps: false,
    freezeTableName: true,
})
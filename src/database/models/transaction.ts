import { Model, DataTypes, Sequelize} from "sequelize";


interface TransactionTypes {
  id: string;
  value: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class Transaction extends Model<TransactionTypes> implements TransactionTypes {
    id!: string;
    value!: number;
    description!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

Transaction.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING(150),
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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

}, {
    sequelize: new Sequelize(),
    modelName: 'Transaction',
    timestamps: false,
    freezeTableName: true,
})
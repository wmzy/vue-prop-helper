import _ from 'lodash';
import ph from '../src';

describe('vue-prop-helper', function() {
  it('should be work for type check', function() {
    ph.string().should.be.deepEqual({type: [String]});
    ph.type(Date)().should.be.deepEqual({type: [Date]});
  });
  it('should be work for multi-types check', function() {
    ph.string.number.boolean.function.object.array.symbol
      .type(Date)()
      .should.be.deepEqual({
        type: [String, Number, Boolean, Function, Object, Array, Symbol, Date]
      });
  });
  it('should gen required success', function() {
    ph.string.required().should.be.deepEqual({
      type: [String],
      required: true
    });
  });
  it('should gen default success', function() {
    ph.string
      .default('abc')()
      .should.be.deepEqual({
        type: [String],
        default: 'abc'
      });
  });
  it('should gen validator success', function() {
    ph.string
      .default('')
      .validator(_.noop)()
      .should.be.deepEqual({
        type: [String],
        default: '',
        validator: _.noop
      });
  });
  it('should cache result', function() {
    ph.string
      .default('abc')()
      .should.be.deepEqual({
        type: [String],
        default: 'abc'
      });

    ph().should.be.deepEqual({
      type: [String],
      default: 'abc'
    });
  });
});
